export const predictFirstYearPersistence = async (formData) => {
    try {
      const response = await fetch("http://0.0.0.0:2222/predict/firstyearpersistence/", {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok) {
          return result
      }
    } catch (error) {
      console.error("Error getting the persistence:", error);
      return null;
    }
};
  

export default { predictFirstYearPersistence };