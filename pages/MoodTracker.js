import Form from 'react-bootstrap/Form';

export default function MoodTracker() {
  return (
    <Form>
    <Form.Group>
    <Form.Label>How are you today?</Form.Label>
    <Form.Select aria-label="Default select example">
      <option>Select Emotion</option>
      <option value="1">Happy</option>
      <option value="2">Sad</option>
      <option value="3">Meh</option>
    </Form.Select>
    </Form.Group>
    <br />
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>What made you feel this way?</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <Form.Label>Mood Range</Form.Label>
      <Form.Range />
  </Form>
  );
}
