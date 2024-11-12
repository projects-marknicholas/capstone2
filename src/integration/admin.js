import { endpoints } from './config';

export const getAccounts = async ({ searchQuery, page }) => {
  const url = searchQuery
    ? `${endpoints.getAccounts}?search=${searchQuery}&page=${page}&limit=50`
    : `${endpoints.getAccounts}?page=${page}&limit=50`;
  const userData = JSON.parse(localStorage.getItem('user'));
  const apiKey = userData?.api_key;

  try {
    if (!url) {
      throw new Error('API endpoint is not defined');
    }

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (data.status === 'error') {
      throw new Error(data.message);
    }

    return { status: 'success', data: data.data };
  } catch (error) {
    console.error('Error during fetching accounts:', error);
    return { status: 'error', message: 'An error occurred while fetching accounts. Please try again.' };
  }
};

export const updateAccount = async ({ uid, status }) => {
  const url = `${endpoints.updateAccounts}?uid=${uid}&status=${status}`;
  const userData = JSON.parse(localStorage.getItem('user'));
  const apiKey = userData?.api_key;

  try {
    if (!url) {
      throw new Error('API endpoint is not defined');
    }

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': apiKey,
      },
      body: JSON.stringify({ status }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (data.status === 'error') {
      throw new Error(data.message);
    }

    return { status: 'success', message: 'Account status updated successfully.' };
  } catch (error) {
    console.error('Error during updating account:', error);
    return { status: 'error', message: 'An error occurred while updating the account status. Please try again.' };
  }
};