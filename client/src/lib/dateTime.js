import moment from 'moment';

export const calendarTime = dateTime => (moment(dateTime).format('MMM d YYYY'));