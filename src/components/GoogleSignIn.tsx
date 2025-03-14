import { GoogleLogin } from '@react-oauth/google';

export default function GoogleSignIn({ onSuccess }: { onSuccess: (credential: string) => void }) {
  return (
    <div className="google-signin-container">
      <GoogleLogin
        onSuccess={credentialResponse => {
          onSuccess(credentialResponse.credential!);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        useOneTap
        auto_select
      />
    </div>
  );
}