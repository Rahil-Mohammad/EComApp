import React, { memo } from 'react';

function Footer() {
    return (
        <footer className="bg-gray-500 px-4 py-2 md:px-3 lg:px-8 lg:py-4">
            <div className="flex justify-between items-center w-full">
                <div className="text-white text-sm">© 2024 CodeYogi</div>
                <div className="text-white text-sm">Powered by CodeYogi</div>
            </div>
        </footer>
    );
}

export default memo(Footer);
