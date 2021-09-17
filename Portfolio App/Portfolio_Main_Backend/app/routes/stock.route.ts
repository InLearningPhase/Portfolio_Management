import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Injectable, Param, Patch, Post, Put, Query, Req } from '@nestjs/common';
import { StockFacade } from 'app/facade/stockFacade';
import { stockDto } from 'submodules/Portfolio-Main-Dtos/stockDto';
import { ResponseModel } from '../../submodules/Portfolio-Platform-Common/ResponseModel';

@Controller('stocks')
export class StockRoutes {

  constructor(private stockFacade: StockFacade) { }

  @Get()
  allStocks() {
    try {
      console.log("Inside controller ......");
      return this.stockFacade.getAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get("/:table/:ticker_symbol")
  getAllStockByTickerSymbol(@Param('table') table: string, @Param('ticker_symbol') ticker_symbol: string): Promise<ResponseModel<stockDto>> {
    try {
      console.log(ticker_symbol);
      return this.stockFacade.getByTickerSymbol(table, ticker_symbol);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}