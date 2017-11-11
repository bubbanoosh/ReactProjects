import { SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default function submitPostNewSubmitForm(values) {
  return sleep(1000).then(() => {
    // simulate server latency
    if (!['redux', 'react', 'form', 'shit'].includes(values.postTitle)) {
      throw new SubmissionError({
        postTitle: 'Title not contained in expected results',
        _error: 'Invalid title!'
      })
    } else if (values.postContent !== 'xxx') {
      throw new SubmissionError({
        postContent: 'Content should contain \'xxx\'',
        _error: 'Invalid Content!'
      })
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    }
  })
}

//export default submitPostNewSubmitForm;