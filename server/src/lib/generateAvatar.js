import md5 from 'md5';

export default async (username) => `http://gravatar.com/avatar/${md5(username)}?d=identicon`;