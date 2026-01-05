// Función asincrónica para obtener y renderizar empleos
export async function loadJobs() {
  try {
    const response = await fetch("./data.json");
    const jobs = await response.json();
    return jobs;
  } catch (error) {
    console.error(error);
    return [];
  }
}
