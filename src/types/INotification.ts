export interface INotification {
  message: string;
  type: 'success' | 'error' | 'info';
  open: boolean;
}
