class Error {
   render() {
      const html = `
          <div class="error-conteiner">
            <div class="error-message">
               <h3 >ERROR 404</h3>
               <p>Спробуйте пізніше</p>
            </div> 
         </div>
      
      `;

      ROOT_ERROR.innerHTML = html;
   }
}

const errorPage = new Error();