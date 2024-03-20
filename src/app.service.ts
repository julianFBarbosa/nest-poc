import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): object {
        return {
            hello: "world"
        };
    }

    getlaLaLa(): object {
        return {
            hello: "lalalal"
        };
    }
}
