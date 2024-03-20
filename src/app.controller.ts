import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';

@Controller("teste")
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get("abc")
    getHello(): object {
        return this.appService.getHello();
    }

    @Get("lalala")
    getTest(): object {
        return this.appService.getlaLaLa();
    }
}
