import { motion } from "framer-motion";

const InputField = ({ field, formik }) => {
  const { name, label, type, placeholder, optional, options } = field;
  const value = formik.values[name] || "";
  const error = formik.errors[name];
  const touched = formik.touched[name];
  const isInvalid = touched && error;

  return (
    <motion.div
      className="space-y-2"
      animate={isInvalid ? { x: [-4, 4, -4, 4, 0] } : {}}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-end">
        <label htmlFor={name} className="block text-gray-700 text-xs font-bold">
          {label}
          {type !== "file" && !optional && (
            <span className="text-red-500"> *</span>
          )}
          {optional && (
            <span className="text-gray-400 text-sm font-normal ms-2">
              (اختياري)
            </span>
          )}
        </label>
      </div>

      {type === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full p-3 border rounded-2xl outline-none focus:ring-2 focus:ring-red-600 bg-white text-base transition-colors ${
            isInvalid ? "border-red-500 bg-red-50" : "border-gray-200"
          }`}
        >
          <option value="">اختر من القائمة...</option>
          {options?.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : type === "file" ? (
        <input
          id={name}
          type="file"
          name={name}
          onChange={(event) => {
            formik.setFieldValue(name, event.currentTarget.files[0]);
          }}
          onBlur={formik.handleBlur}
          className="w-full p-2.5 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-red-600 text-sm file:ml-4 file:py-1.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder ? placeholder : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full p-3 border rounded-2xl outline-none focus:ring-2 focus:ring-red-600 text-base transition-colors ${
            isInvalid ? "border-red-500 bg-red-50" : "border-gray-200"
          }`}
        />
      )}

      {isInvalid && (
        <p className="text-red-500 text-xs font-semibold mt-1 px-1">{error}</p>
      )}
    </motion.div>
  );
};

export default InputField;
