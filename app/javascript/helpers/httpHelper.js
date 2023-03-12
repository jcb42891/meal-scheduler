const csrfToken = document.querySelector("[name='csrf-token']").content;

export const httpGet = (path, onComplete) => {
  fetch(path, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .then((data) => {
      onComplete(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

export const httpPost = (path, requestPayload, onComplete) => {
  fetch(path, {
    method: "POST",
    body: JSON.stringify(requestPayload),
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrfToken,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .then((data) => {
      onComplete(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

export const httpDelete = (path, onComplete) => {
  fetch(path, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrfToken,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .then((data) => {
      onComplete(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};
