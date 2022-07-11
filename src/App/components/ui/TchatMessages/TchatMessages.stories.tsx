/* eslint-disable */
import TchatMessages from './TchatMessages';

export default {
  title: "TchatMessages",
};

export const Default = () => <TchatMessages users={[]} messages={[]}/>;

Default.story = {
  name: 'default',
};
