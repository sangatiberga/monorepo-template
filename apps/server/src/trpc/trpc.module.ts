/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TRPCRouter } from "./trpc.router";
import { TRPCService } from "./trpc.service";

@Module({
  imports: [],
  providers: [TRPCService, TRPCRouter],
})
export class TRPCModule { }
