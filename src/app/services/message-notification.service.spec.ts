import { TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';

import { MessageNotificationService } from './message-notification.service';

describe('MessageNotificationService', () => {
  let service: MessageNotificationService;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MessageService', ['add']);

    TestBed.configureTestingModule({
      providers: [
        MessageNotificationService,
        { provide: MessageService, useValue: spy }
      ]
    });
    service = TestBed.inject(MessageNotificationService);
    messageServiceSpy = TestBed.inject(MessageService) as jasmine.SpyObj<MessageService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call MessageService with success severity', () => {
    const message = 'Success message';
    service.showSuccessMessage(message);
    expect(messageServiceSpy.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  });

  it('should call MessageService with warn severity', () => {
    const message = 'Warn message';
    service.showWarnMessage(message);
    expect(messageServiceSpy.add).toHaveBeenCalledWith({
      severity: 'warn',
      summary: 'Warn',
      detail: message,
    });
  });

  it('should call MessageService with error severity', () => {
    const message = 'Error message';
    service.showErrorMessage(message);
    expect(messageServiceSpy.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
  });

  it('should handle null message in showSuccessMessage', () => {
    const message = null as unknown as string;
    service.showSuccessMessage(message);
    expect(messageServiceSpy.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Success',
      detail: null as unknown as string,
    });
  });

  it('should handle null message in showWarnMessage', () => {
    const message = null as unknown as string;
    service.showWarnMessage(message);
    expect(messageServiceSpy.add).toHaveBeenCalledWith({
      severity: 'warn',
      summary: 'Warn',
      detail: null as unknown as string,
    });
  });

  it('should handle null message in showErrorMessage', () => {
    const message = null as unknown as string;
    service.showErrorMessage(message);
    expect(messageServiceSpy.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Error',
      detail: null as unknown as string,
    });
  });
});
