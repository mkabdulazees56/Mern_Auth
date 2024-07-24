import { signOut } from "../user/userSlice";

export const handleSignOut = () => async (dispatch) => {
  try {
    await fetch("/api/auth/signout");
    dispatch(signOut());
  } catch (error) {
    console.error(error);
  }
};
