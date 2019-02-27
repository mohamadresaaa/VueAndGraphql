import moment from 'moment';

// Calendar Time
export const calendarTime = dateTime => (moment(dateTime).format('MMM d, YYYY'));

// Relative Time
export const relativeTime = dateTime => (moment(dateTime).fromNow());