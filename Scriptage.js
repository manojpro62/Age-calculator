function calculateAge() {
    const d = parseInt(document.getElementById("date").value);
    const m = parseInt(document.getElementById("month").value);
    const y = parseInt(document.getElementById("year").value);
  
    const birthDate = new Date(y, m - 1, d);
    const today = new Date();
  
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    document.getElementById("output").textContent =
      `Your age is ${years} Years ${months} Months ${days} Days`;
  }
  