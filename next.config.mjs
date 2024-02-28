/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    selected: 1,
    vietnam: "VUI LÒNG CHỌN LỰA CHỌN",
    english: "PLEASE SELECT THE OPTION",
  },
};

const changeSelectedValue = (newValue) => {
  return {
    ...nextConfig,
    env: {
      ...nextConfig.env,
      selected: newValue,
    },
  };
};

export { nextConfig, changeSelectedValue };
