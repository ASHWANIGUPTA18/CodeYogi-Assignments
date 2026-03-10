import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const schema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Min 6 characters").required("Required"),
});

function Login() {
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    validateOnMount: true,
    onSubmit: async (values, { setStatus }) => {
      setStatus("");
      try {
        await login(values);
        navigate("/", { replace: true });
      } catch (err) {
        setStatus("Login failed. Check your credentials.");
      }
    },
  });

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="auth-logo">🛒</div>
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Sign in to continue shopping</p>

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
              autoComplete="current-password"
            />
          </label>
          {formik.touched.password && formik.errors.password && (
            <div className="auth-error">{formik.errors.password}</div>
          )}

          {formik.status && <div className="auth-error">{formik.status}</div>}

          <button className="auth-button" type="submit" disabled={!(formik.isValid && formik.dirty) || loading}>
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <div className="auth-links">
          <span>New here?</span>
          <Link className="auth-link" to="/signup">Create account</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
