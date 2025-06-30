export const post = async () => {
    console.log('Register API called');
    return {
      status: true,
      statusCode: 200,
      message: 'User registered successfully',
    };
  };