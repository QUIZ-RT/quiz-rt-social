
export const serviceCall = (url,data,header) => {
    if ('fetch' in window) {
        return fetch(url, {
            method: "GET",
            headers: new Headers(header)
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            }
        }).catch(function (error) {
            console.log("Request failure: ", error);
        });
    }
    else {
      return  $.ajax({
            url: url,
            method: "GET",
            headers: header,
            data: JSON.stringify(data)
        }).done(function (data) {
            return data;
        }).fail(function (xhr) {
            console.log('error', xhr);
        });
    }
}