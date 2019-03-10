// @flow

import * as AbsintheSocket from '@absinthe/socket';
import { createAbsintheSocketLink } from '@absinthe/socket-apollo-link';
import { Socket as PhoenixSocket } from 'phoenix';
import cookie from 'react-cookies';

const userIdCookie = cookie.load('userId');

export default createAbsintheSocketLink(
	AbsintheSocket.create(new PhoenixSocket('ws://localhost:4000/socket', { params: { userId: userIdCookie } }))
);
