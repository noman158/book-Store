const BASE_URL = 'http://localhost:5000';

export const getBooks = async () =>{


    const response = await fetch(`${BASE_URL}/books`);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    const data = await response.json();
    return data;

};

export const detailsBooks = async (id) => {

    const response = await fetch(`${BASE_URL}/books/show/${id}`)
    if(!response.ok){
        const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;

};

export const updateBook = async (id, updatedBook) => {
  try {
    const response = await fetch(`${BASE_URL}/books/edit/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBook),
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating book:', error);
    throw error;
  }
};

export const deleteBook = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/books/delete/${id}`, 
        {method: 'DELETE',
    });
        if(!response.ok){
            const errorMessage = await response.text();
      throw new Error(errorMessage);
        }
        const data = await response.text();
        return data;
        
    } catch (error) {
        console.error('Error deleting book:', error);
    throw error;
        
    }
};

export const createBook = async (newBook) => {
    try {
        const response = await fetch(`${BASE_URL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating book:', error);
    throw error;
  }
}