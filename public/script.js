document.getElementById('dataForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const patientID = document.getElementById('patientID').value;
  const input2 = document.getElementById('input2').value;
  const input3 = document.getElementById('input3').value;

  try {
    const response = await fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ patientID, input2, input3 })
    });

    const result = await response.json();
    if(response.ok) {
      document.getElementById('responseMessage').innerText = `Form submitted. FormID: ${result.formID}`;
      document.getElementById('dataForm').reset();
    } else {
      document.getElementById('responseMessage').innerText = `Error: ${result.error}`;
    }
  } catch(err) {
    document.getElementById('responseMessage').innerText = 'Network error';
  }
});