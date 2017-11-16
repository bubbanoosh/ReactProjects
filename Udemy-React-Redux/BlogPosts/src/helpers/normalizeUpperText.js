import _ from 'lodash';

export default function normalizeUpperText(value) {
    return (
        _.map(value.split(' '), (w) => _.capitalize(w.toLowerCase())).join(' ')
    );
  }