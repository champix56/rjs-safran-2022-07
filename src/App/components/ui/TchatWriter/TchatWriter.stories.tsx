/* eslint-disable */
import TchatWriter from './TchatWriter';

export default {
  title: "TchatWriter",
};

export const Default = () => <TchatWriter users={[]} onMesageSent={()=>{}} />;

Default.story = {
  name: 'default',
};
