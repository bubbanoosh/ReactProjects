import { SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default function submitPostNewForm(values) {
  return sleep(1000).then(() => {
    // simulate server latency
    const garbageAndSwears = ['asdf', 'xxx', 'fuck', 'shit']; 
    if (garbageAndSwears.includes(values.postTitle)) {
      throw new SubmissionError({
        postTitle: 'Please don\'t use the swears or talk garbage',
        _error: 'Invalid title!'
      })
    } else if (garbageAndSwears.includes(values.postContent)) {
      throw new SubmissionError({
        postContent: 'That is bad content',
        _error: 'Invalid Content!'
      })
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    }
  })
}

//export default submitPostNewSubmitForm;