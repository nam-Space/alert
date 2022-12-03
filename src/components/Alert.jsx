import React from "react";

const Alert = ({ text }) => {
    return (
        <div class="alert alert-warning" role="alert">
            Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại.
        </div>
    );
};

export default Alert;
