import axios from "axios";

export const getAllMedia = async (type = "") => {
 
    try {
      const res = await axios.get(
        // `${process.env.REACT_APP_DEV_URL}/media?type=${type}`
        `${process.env.REACT_APP_PROD_URL}/media?type=${type}`
      );
  
      return res;
    } catch (error) {
      console.log("ERROR", error);
      return error?.response;
    }
  };
export const getMedia = async (
    id
  ) => {
    
    try {
      const res = await axios.get(
        // `${process.env.REACT_APP_DEV_URL}/media/${id}`
        `${process.env.REACT_APP_PROD_URL}/media/${id}`
      
      );
  
      return res;
    } catch (error) {
      console.log("ERROR", error);
      return error?.response;
    }
  };
export const updateMedia = async (
  token,
    mediaType,
    mediaUrl
  ) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const res = await axios.put(
        // `${process.env.REACT_APP_DEV_URL}/media`, {
        `${process.env.REACT_APP_PROD_URL}/media`, {
        mediaType,
        mediaUrl
      },
      config
      );
  
      return res;
    } catch (error) {
      console.log("ERROR", error);
      return error?.response;
    }
  };


  
export const getAllPoems = async () => {
  try {
    const res = await axios.get(
      // `${process.env.REACT_APP_DEV_URL}/poetry`
      `${process.env.REACT_APP_PROD_URL}/poetry`
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const getPoem = async (id) => {
  try {
    const res = await axios.get(
      // `${process.env.REACT_APP_DEV_URL}/poetry/${id}`);
      `${process.env.REACT_APP_PROD_URL}/poetry/${id}`);

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const createPoem = async (
  token,
  id,
  title,
  poem,
  videoUrl
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.post(
      // `${process.env.REACT_APP_DEV_URL}/poetry`, {
      `${process.env.REACT_APP_PROD_URL}/poetry`, {
      title,
  poem,
  videoUrl
    },
    config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
export const updatePoem = async (
  token,
  id,
  title,
  poem,
  videoUrl
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.put(
      // `${process.env.REACT_APP_DEV_URL}/poetry/${id}`, {
      `${process.env.REACT_APP_PROD_URL}/poetry/${id}`, {
      title,
  poem,
  videoUrl
    },
    config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const deletePoem = async (
  token,
  id,
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.delete(
      // `${process.env.REACT_APP_DEV_URL}/poetry/${id}`,
      `${process.env.REACT_APP_PROD_URL}/poetry/${id}`,
    config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const getBio = async () => {
  try {
    const res = await axios.get(
      // `${process.env.REACT_APP_DEV_URL}/bio`);
      `${process.env.REACT_APP_PROD_URL}/bio`);

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const updateBio = async (
  token,
  id,
  bio,
  image
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.put(
      // `${process.env.REACT_APP_DEV_URL}/bio/${id}`, {
      `${process.env.REACT_APP_PROD_URL}/bio/${id}`, {
      bio,
      image
    },
    config
    )
    ;

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const getTestimonials = async (type = "") => {
  try {
    const res = await axios.get(
      // `${process.env.REACT_APP_DEV_URL}/testimonial`);
      `${process.env.REACT_APP_PROD_URL}/testimonial`);

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const uploadTestimonal = async (
  token,
  name,
  position,
  testimonial,
  media
) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.post(
      // `${process.env.REACT_APP_DEV_URL}/testimonial`, {
      `${process.env.REACT_APP_PROD_URL}/testimonial`, {
      name,
  position,
  testimonial,
  media
    },
    config

    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const getTestimonial = async (
  id
) => {
  try {
    const res = await axios.get(
      // `${process.env.REACT_APP_DEV_URL}/testimonial/${id}`);
      `${process.env.REACT_APP_PROD_URL}/testimonial/${id}`);

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};


export const updateTestimonal = async (
  token,
  id,
  name,
  position,
  testimonial,
  media
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.put(
      // `${process.env.REACT_APP_DEV_URL}/testimonial/${id}`, {
      `${process.env.REACT_APP_PROD_URL}/testimonial/${id}`, {
      name,
  position,
  testimonial,
  media
    },
   config 
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const deleteTestimonial = async (
  token,
  id,
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.delete(
      // `${process.env.REACT_APP_DEV_URL}/testimonial/${id}`,
      `${process.env.REACT_APP_PROD_URL}/testimonial/${id}`,
    config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const getAllSpeakingEngagements = async (type = "") => {
  try {
    const res = await axios.get(
      // `${process.env.REACT_APP_DEV_URL}/speaking`);
      `${process.env.REACT_APP_PROD_URL}/speaking`);

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const createSpeakingEngagement = async (
  token,
  event,
  location,
  date,
  media
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.post(
      // `${process.env.REACT_APP_DEV_URL}/speaking`, {
      `${process.env.REACT_APP_PROD_URL}/speaking`, {
      event,
  location,
  date,
  media
    },
    config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const getSpeaking = async (
  id
) => {
  try {
    const res = await axios.get(
      // `${process.env.REACT_APP_DEV_URL}/speaking/${id}`);
      `${process.env.REACT_APP_PROD_URL}/speaking/${id}`);

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};


export const updateSpeakingEngagement = async (
  token,
  id,
  event,
  location,
  date,
  media
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.put(
      // `${process.env.REACT_APP_DEV_URL}/speaking/${id}`, {
      `${process.env.REACT_APP_PROD_URL}/speaking/${id}`, {
      event,
  location,
  date,
  media
    },
    config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const deleteSpeaking = async (
  token,
  id,
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.delete(
      // `${process.env.REACT_APP_DEV_URL}/speaking/${id}`,
      `${process.env.REACT_APP_PROD_URL}/speaking/${id}`,
    config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const login = async (
  username,
  password
) => {
  try {
    const res = await axios.post(
      // `${process.env.REACT_APP_DEV_URL}/auth/login`, {
      `${process.env.REACT_APP_PROD_URL}/auth/login`, {
      username,
      password
    });

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};