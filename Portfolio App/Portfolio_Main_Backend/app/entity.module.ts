import { HttpModule, HttpService, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserAppService from './appServices/userAppService'
import { UserFacade } from './facade/userFacade';
import { UserRoutes } from './routes/user.route';
import { User } from '../submodules/Portfolio-Main-Entities/user';
import { Order } from 'submodules/Portfolio-Main-Entities/order';
import { Trade } from 'submodules/Portfolio-Main-Entities/trade';
import { OrderFacade } from './facade/orderFacade';
import OrderAppService from './appServices/orderAppService';
import { TradeFacade } from './facade/tradeFacade';
import TradeAppService from './appServices/tradeAppService';
import { OrderRoutes } from './routes/order.route';
import { TradeRoutes } from './routes/trade.route';
import { Stock } from 'submodules/Portfolio-Main-Entities/stock';
import { StockRoutes } from './routes/stock.route';
import { StockFacade } from './facade/stockFacade';
import StockAppService from './appServices/stockAppService';
import { AllOrderRoutes } from './routes/all_order.route';
import { AllOrder } from 'submodules/Portfolio-Main-Entities/all_order';
import { AllOrderFacade } from './facade/all_orderFacade';
import AllOrderAppService from './appServices/all_orderAppService';


@Module({
  imports: [HttpModule,
    TypeOrmModule.forFeature([ User, Order, Trade, Stock, AllOrder]),
  ],
  providers: [UserFacade,UserAppService, OrderFacade, OrderAppService, TradeFacade,TradeAppService, StockFacade, StockAppService, AllOrderFacade, AllOrderAppService],
  controllers: [UserRoutes, OrderRoutes, TradeRoutes, StockRoutes, AllOrderRoutes]
})

export class EntityModule implements NestModule {
  constructor() {
    console.log("Inside Entity Module....");
  }

  configure(consumer: MiddlewareConsumer) {
    console.log("Inside Consumer baby......");
    // consumer
    //   .apply(AuthenticationMiddleware,AuthorizationMiddleware)
    //   .forRoutes({path:"/*",method:RequestMethod.ALL});
  }
}