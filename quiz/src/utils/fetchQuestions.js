export const fetchQuestions = async () => {
  try {
    const response = await fetch('/src/assets/data/data.json');
    const data = await response.json();
    
    return data;
  } catch (err) {
    console.log(err);
  }
}
