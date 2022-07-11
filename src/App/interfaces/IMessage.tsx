export default interface IMessage {
  id?: number;
  text: string;
  from: number;
  dt: string;
  to?: number;
}
