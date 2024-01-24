// ** NestJs Common Import
import { MiddlewareConsumer, Module, NestModule, ValidationPipe } from '@nestjs/common';

// ** NestJs Config Import
import { ConfigModule, ConfigService } from '@nestjs/config';

// ** Log4js Import
import { Log4jsModule } from '@nestx-log4js/core';
import { LOG4JS_DEFAULT_CONFIG } from './loggers/layout.logger';

// ** Config custom
import configuration from './configs/configuration';

// ** Joi Import
import * as Joi from 'joi';

// ** Logger Middleware Import
import { LoggerMiddleware } from './middlewares/logger.middleware';

// ** Exception Import
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/httpException.filter';

// ** Database
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './model/users/users.module';
import { RolesModule } from './model/roles/roles.module';
import { PermissionsModule } from './model/permissions/permissions.module';
import { OracleModule } from './oracle/oracle.module';
import { TeamsModule } from './model/teams/teams.module';
import { LeadersModule } from './model/leaders/leaders.module';
import { StaffsModule } from './model/staffs/staffs.module';
import { AppService } from './startUp.service';
import { ProjectsModule } from './model/projects/projects.module';

@Module({
  imports: [
    // ** NextJs Config
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision', 'staging')
          .default('development'),
        PORT: Joi.number().default(8080),
      }),
    }),

    // ** Database
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: (configService: ConfigService) => {
        const { uri, syncForce, syncAlter } = configService.get('database');

        return {
          uri,
          dialect: 'postgres',
          logging: false,
          autoLoadModels: true,
          sync: { force: syncForce, alter: syncAlter },
        };
      },
    }),

    // ** Log4js
    Log4jsModule.forRoot({ config: LOG4JS_DEFAULT_CONFIG }),

    ProjectsModule,

    UsersModule,

    RolesModule,

    PermissionsModule,

    OracleModule,

    TeamsModule,

    LeadersModule,

    ProjectsModule,

    StaffsModule,
  ],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}
