import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const schema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Min 6 characters").required("Required"),
  confirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

function SignUp() {
  const { signUp, loading } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "", confirm: "" },
    validationSchema: schema,
    validateOnMount: true,
    onSubmit: async (values, { setStatus }) => {
      setStatus("");
      try {
        await signUp({ email: values.email, password: values.password });
        navigate("/", { replace: true });
      } catch (err) {
        setStatus("Signup failed. Try again.");
      }
    },
  });

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="auth-logo">🛍️</div>
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">Join to explore products</p>

        <form className="auth-form" onSubmit={formik.handleSubmit}>
          <label className="auth-input" htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="email"
            />
          </label>
          {formik.touched.email && formik.errors.email && (
            <div className="auth-error">{formik.errors.email}</div>
          )}

          <label className="auth-input" htmlFor="password">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="new-password"
            />
          </label>
          {formik.touched.password && formik.errors.password && (
            <div className="auth-error">{formik.errors.password}</div>
          )}

          <label className="auth-input" htmlFor="confirm">
            <input
              id="confirm"
              name="confirm"
              type="password"
              placeholder="Confirm password"
              value={formik.values.confirm}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="new-password"
            />
          </label>
          {formik.touched.confirm && formik.errors.confirm && (
            <div className="auth-error">{formik.errors.confirm}</div>
          )}

          {formik.status && <div className="auth-error">{formik.status}</div>}

          <button className="auth-button" type="submit" disabled={!(formik.isValid && formik.dirty) || loading}>
            {loading ? "Creating..." : "Sign up"}
          </button>
        </form>

        <div className="auth-links">
          <span>Already have an account?</span>
          <Link className="auth-link" to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
