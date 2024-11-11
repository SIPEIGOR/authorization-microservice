import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'An unexpected error occurred';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const responseMessage = exception.getResponse();

      message =
        typeof responseMessage === 'string'
          ? responseMessage
          : (responseMessage as any).message || 'An error occurred';
    } else if (exception instanceof QueryFailedError) {
      status = HttpStatus.BAD_REQUEST;
      message = 'Database query error';
    } else if (exception instanceof TypeError) {
      status = HttpStatus.BAD_REQUEST;
      message = 'Type error encountered';
    } else {
      status = HttpStatus.NOT_FOUND;
      message = 'Resource not found';
    }

    if (process.env.NODE_ENV !== 'production') {
      console.error('Detailed Exception:', exception);
    }

    response.status(status).json({
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
    });
  }
}
