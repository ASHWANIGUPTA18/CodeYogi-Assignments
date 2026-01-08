// import React from "react";

// import { useFormik } from "formik";
// import * as Yup from "yup";

// function Login() {
//   function callLoginApi(values) {
//     console.log(
//       "Login API called with values:",
//       values.email,
//       values.password
//     );
//   }

//   const Schema = Yup.object().shape({
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//   });

//   const {
//     handleSubmit,
//     handleChange,
//     handleBlur,
//     values,
//     errors,
//     touched,
//     isValid,
//     dirty,
//   } = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: Schema,
//     validateOnMount: true,
//     onSubmit: callLoginApi,
//   });

//   return (
//     <div className="flex items-center justify-center w-full bg-gray-100 h-screen">
//       <form
//         className="flex flex-col space-y-3 bg-white p-6 rounded-md shadow-md w-96"
//         onSubmit={handleSubmit}
//       >
//         <h1 className="font-bold self-center text-2xl">
//           Welcome To CodeYogi
//         </h1>

//         {/* Email */}
//         <input
//           className="border p-2 rounded-md border-gray-300"
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           autoComplete="email"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.email}
//         />
//         {touched.email && errors.email && (
//           <div className="text-red-600 text-sm">{errors.email}</div>
//         )}

//         {/* Password */}
//         <input
//           className="border p-2 rounded-md border-gray-300"
//           type="password"
//           name="password"
//           placeholder="Password"
//           autoComplete="current-password"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.password}
//         />
//         {touched.password && errors.password && (
//           <div className="text-red-600 text-sm">{errors.password}</div>
//         )}

//        <button
//   type="submit"
//   disabled={!(isValid && dirty)}
//   className={`px-4 py-2 rounded text-white
//     ${isValid && dirty
//       ? "bg-blue-500 hover:bg-blue-600"
//       : "bg-gray-400 cursor-not-allowed"}
//   `}
// >
//   Login
// </button>

//       </form>
//     </div>
//   );
// }

// export default Login;






import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "./loginSchema";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("Login Data:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-96 p-6 bg-white shadow rounded">
      
      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="border p-2 w-full"
      />
      {formik.touched.email && formik.errors.email && (
        <p className="text-red-500 text-sm">{formik.errors.email}</p>
      )}

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="border p-2 w-full mt-3"
      />
      {formik.touched.password && formik.errors.password && (
        <p className="text-red-500 text-sm">{formik.errors.password}</p>
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white w-full mt-4 p-2 rounded"
      >
        Login
      </button>
    </form>
  );
}

export default Login;
