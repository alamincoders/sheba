export const MapIcon = () => {
  return (
    <svg
      width={22}
      height={25}
      viewBox="0 0 22 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 6.52438C10.2089 6.52438 9.43552 6.75898 8.77772 7.1985C8.11993 7.63803 7.60723 8.26275 7.30448 8.99365C7.00173 9.72455 6.92252 10.5288 7.07686 11.3047C7.2312 12.0807 7.61216 12.7934 8.17157 13.3528C8.73098 13.9122 9.44372 14.2932 10.2196 14.4475C10.9956 14.6019 11.7998 14.5227 12.5307 14.2199C13.2616 13.9172 13.8864 13.4045 14.3259 12.7467C14.7654 12.0889 15 11.3155 15 10.5244C15 9.46352 14.5786 8.4461 13.8284 7.69596C13.0783 6.94581 12.0609 6.52438 11 6.52438ZM11 12.5244C10.6044 12.5244 10.2178 12.4071 9.88886 12.1873C9.55996 11.9676 9.30362 11.6552 9.15224 11.2898C9.00087 10.9243 8.96126 10.5222 9.03843 10.1342C9.1156 9.74624 9.30608 9.38988 9.58579 9.11017C9.86549 8.83047 10.2219 8.63998 10.6098 8.56281C10.9978 8.48564 11.3999 8.52525 11.7654 8.67662C12.1308 8.828 12.4432 9.08434 12.6629 9.41324C12.8827 9.74214 13 10.1288 13 10.5244C13 11.0548 12.7893 11.5635 12.4142 11.9386C12.0391 12.3137 11.5304 12.5244 11 12.5244Z"
        fill="#0E0E0E"
      />
      <path
        d="M10.9998 24.5244C10.1578 24.5287 9.32693 24.3312 8.57689 23.9484C7.82684 23.5657 7.17942 23.0088 6.68882 22.3244C2.87782 17.0674 0.944824 13.1154 0.944824 10.5774C0.944824 7.91062 2.00419 5.35309 3.88987 3.46741C5.77554 1.58173 8.33307 0.522369 10.9998 0.522369C13.6666 0.522369 16.2241 1.58173 18.1098 3.46741C19.9955 5.35309 21.0548 7.91062 21.0548 10.5774C21.0548 13.1154 19.1218 17.0674 15.3108 22.3244C14.8202 23.0088 14.1728 23.5657 13.4228 23.9484C12.6727 24.3312 11.8419 24.5287 10.9998 24.5244ZM10.9998 2.70537C8.91224 2.70775 6.91084 3.5381 5.4347 5.01424C3.95855 6.49039 3.12821 8.49179 3.12582 10.5794C3.12582 12.5894 5.01882 16.3064 8.45482 21.0454C8.74652 21.4471 9.12919 21.7742 9.57154 21.9996C10.0139 22.2251 10.5033 22.3427 10.9998 22.3427C11.4963 22.3427 11.9858 22.2251 12.4281 21.9996C12.8705 21.7742 13.2531 21.4471 13.5448 21.0454C16.9808 16.3064 18.8738 12.5894 18.8738 10.5794C18.8714 8.49179 18.0411 6.49039 16.565 5.01424C15.0888 3.5381 13.0874 2.70775 10.9998 2.70537Z"
        fill="#0E0E0E"
      />
    </svg>
  );
};

export const ArrowLeft = () => {
  return (
    <svg
      width={13}
      height={24}
      viewBox="0 0 13 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.2483 2.09188C12.2496 2.31358 12.2071 2.53336 12.1233 2.7386C12.0395 2.94384 11.916 3.13052 11.7598 3.28792L4.02765 11.0033C3.86976 11.1599 3.74444 11.3462 3.65891 11.5514C3.57339 11.7567 3.52936 11.9769 3.52936 12.1993C3.52936 12.4217 3.57339 12.6419 3.65891 12.8471C3.74444 13.0524 3.86976 13.2387 4.02765 13.3953L11.7598 21.1107C12.077 21.4279 12.2552 21.8581 12.2552 22.3067C12.2552 22.7553 12.077 23.1855 11.7598 23.5028C11.4426 23.82 11.0124 23.9982 10.5638 23.9982C10.1152 23.9982 9.68495 23.82 9.36773 23.5028L1.65241 15.7706C0.729996 14.8105 0.214844 13.5307 0.214844 12.1993C0.214844 10.8679 0.729996 9.58811 1.65241 8.62801L9.36774 0.89584C9.52434 0.737948 9.71065 0.612621 9.91593 0.5271C10.1212 0.441576 10.3414 0.397545 10.5638 0.397545C10.7862 0.397545 11.0063 0.441576 11.2116 0.5271C11.4169 0.612621 11.6032 0.737948 11.7598 0.89584C11.916 1.05325 12.0395 1.23992 12.1233 1.44516C12.2071 1.65041 12.2496 1.87018 12.2483 2.09188Z"
        fill="#505050"
      />
    </svg>
  );
};

export const ArrowRight = ({ className, ...props }) => {
  return (
    <svg
      width={13}
      height={24}
      viewBox="0 0 13 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M0.221622 21.8991C0.220341 21.6774 0.262835 21.4576 0.346666 21.2524C0.430498 21.0471 0.554019 20.8604 0.710147 20.703L8.44232 12.9877C8.60021 12.8311 8.72553 12.6448 8.81106 12.4395C8.89658 12.2342 8.94061 12.0141 8.94061 11.7917C8.94061 11.5693 8.89658 11.3491 8.81106 11.1438C8.72553 10.9385 8.60021 10.7522 8.44232 10.5956L0.710148 2.8803C0.392938 2.56309 0.214731 2.13286 0.214731 1.68426C0.214731 1.23566 0.392938 0.805426 0.710148 0.488215C1.02736 0.171005 1.45759 -0.00720259 1.90619 -0.00720257C2.3548 -0.00720255 2.78503 0.171005 3.10224 0.488215L10.8176 8.22039C11.74 9.18049 12.2551 10.4603 12.2551 11.7917C12.2551 13.1231 11.74 14.4029 10.8176 15.363L3.10223 23.0951C2.94563 23.253 2.75932 23.3783 2.55404 23.4639C2.34876 23.5494 2.12857 23.5934 1.90619 23.5934C1.68381 23.5934 1.46362 23.5494 1.25834 23.4639C1.05306 23.3783 0.86675 23.253 0.710147 23.0951C0.554019 22.9377 0.430498 22.751 0.346666 22.5458C0.262835 22.3406 0.220341 22.1208 0.221622 21.8991Z"
        fill="#505050"
      />
    </svg>
  );
};

export const TweeterIcon = ({ className, ...props }) => {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clipPath="url(#clip0_185_1014)">
        <path
          d="M8.05016 21.7502C17.1045 21.7502 22.0583 14.2469 22.0583 7.74211C22.0583 7.53117 22.0536 7.31554 22.0442 7.1046C23.0079 6.40771 23.8395 5.5445 24.5 4.55554C23.6025 4.95484 22.6496 5.21563 21.6739 5.32898C22.7013 4.71315 23.4705 3.74572 23.8391 2.60601C22.8726 3.1788 21.8156 3.58286 20.7134 3.80085C19.9708 3.01181 18.989 2.48936 17.9197 2.3143C16.8504 2.13923 15.7532 2.32129 14.7977 2.83234C13.8423 3.34339 13.0818 4.15495 12.6338 5.14156C12.1859 6.12816 12.0754 7.23486 12.3195 8.29054C10.3625 8.19233 8.44794 7.68395 6.69998 6.79834C4.95203 5.91274 3.40969 4.66968 2.17297 3.14976C1.5444 4.23349 1.35206 5.51589 1.63503 6.73634C1.918 7.95678 2.65506 9.02369 3.69641 9.72023C2.91463 9.69541 2.14998 9.48492 1.46563 9.10617V9.1671C1.46492 10.3044 1.8581 11.4068 2.57831 12.287C3.29852 13.1672 4.30132 13.7708 5.41625 13.9952C4.69206 14.1934 3.93198 14.2222 3.19484 14.0796C3.50945 15.0577 4.12157 15.9131 4.94577 16.5266C5.76997 17.14 6.76512 17.4808 7.79234 17.5015C6.04842 18.8714 3.89417 19.6144 1.67656 19.6109C1.28329 19.6103 0.890399 19.5861 0.5 19.5387C2.75286 20.984 5.37353 21.7516 8.05016 21.7502Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_185_1014">
          <rect
            width={24}
            height={24}
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const LinkedinIcon = () => {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_185_1015)">
        <path
          d="M22.7234 0H2.27187C1.29219 0 0.5 0.773438 0.5 1.72969V22.2656C0.5 23.2219 1.29219 24 2.27187 24H22.7234C23.7031 24 24.5 23.2219 24.5 22.2703V1.72969C24.5 0.773438 23.7031 0 22.7234 0ZM7.62031 20.4516H4.05781V8.99531H7.62031V20.4516ZM5.83906 7.43438C4.69531 7.43438 3.77188 6.51094 3.77188 5.37187C3.77188 4.23281 4.69531 3.30937 5.83906 3.30937C6.97813 3.30937 7.90156 4.23281 7.90156 5.37187C7.90156 6.50625 6.97813 7.43438 5.83906 7.43438ZM20.9516 20.4516H17.3937V14.8828C17.3937 13.5562 17.3703 11.8453 15.5422 11.8453C13.6906 11.8453 13.4094 13.2937 13.4094 14.7891V20.4516H9.85625V8.99531H13.2687V10.5609H13.3156C13.7891 9.66094 14.9516 8.70938 16.6813 8.70938C20.2859 8.70938 20.9516 11.0813 20.9516 14.1656V20.4516Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_185_1015">
          <rect
            width={24}
            height={24}
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const FacebookIcon = () => {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_185_1016)">
        <path
          d="M24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 17.9895 4.8882 22.954 10.625 23.8542V15.4688H7.57812V12H10.625V9.35625C10.625 6.34875 12.4166 4.6875 15.1576 4.6875C16.4701 4.6875 17.8438 4.92188 17.8438 4.92188V7.875H16.3306C14.84 7.875 14.375 8.80008 14.375 9.75V12H17.7031L17.1711 15.4688H14.375V23.8542C20.1118 22.954 24.5 17.9895 24.5 12Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_185_1016">
          <rect
            width={24}
            height={24}
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const GithubIcon = () => {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_185_1017)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5 0C5.8724 0 0.5 5.3808 0.5 12.0204C0.5 17.3304 3.938 21.8364 8.7068 23.4252C9.3068 23.5356 9.5252 23.1648 9.5252 22.8456C9.5252 22.5612 9.5156 21.804 9.5096 20.802C6.1712 21.528 5.4668 19.1904 5.4668 19.1904C4.922 17.8008 4.1348 17.4312 4.1348 17.4312C3.0452 16.6872 4.2176 16.7016 4.2176 16.7016C5.4212 16.7856 6.0548 17.94 6.0548 17.94C7.1252 19.776 8.864 19.2456 9.5468 18.9384C9.6572 18.162 9.9668 17.6328 10.31 17.3328C7.646 17.0292 4.844 15.9972 4.844 11.3916C4.844 10.08 5.312 9.006 6.0788 8.166C5.9552 7.8624 5.5436 6.6396 6.1964 4.986C6.1964 4.986 7.2044 4.662 9.4964 6.2172C10.4753 5.95022 11.4853 5.81423 12.5 5.8128C13.52 5.8176 14.546 5.9508 15.5048 6.2172C17.7956 4.662 18.8012 4.9848 18.8012 4.9848C19.4564 6.6396 19.0436 7.8624 18.9212 8.166C19.6892 9.006 20.1548 10.08 20.1548 11.3916C20.1548 16.0092 17.348 17.0256 14.6756 17.3232C15.1064 17.694 15.4892 18.4272 15.4892 19.5492C15.4892 21.1548 15.4748 22.452 15.4748 22.8456C15.4748 23.1672 15.6908 23.5416 16.3004 23.424C18.69 22.6225 20.7672 21.0904 22.2386 19.0441C23.7099 16.9977 24.501 14.5408 24.5 12.0204C24.5 5.3808 19.1264 0 12.5 0Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_185_1017">
          <rect
            width={24}
            height={24}
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const BookmarkIcon = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_307_656)">
        <path
          d="M13 10C13 10.2652 12.8946 10.5196 12.7071 10.7071C12.5196 10.8946 12.2652 11 12 11C11.7348 11 11.4804 10.8946 11.2929 10.7071C11.1054 10.5196 11 10.2652 11 10C11 9.73478 11.1054 9.48043 11.2929 9.29289C11.4804 9.10536 11.7348 9 12 9C12.2652 9 12.5196 9.10536 12.7071 9.29289C12.8946 9.48043 13 9.73478 13 10ZM17 9C16.7348 9 16.4804 9.10536 16.2929 9.29289C16.1054 9.48043 16 9.73478 16 10C16 10.2652 16.1054 10.5196 16.2929 10.7071C16.4804 10.8946 16.7348 11 17 11C17.2652 11 17.5196 10.8946 17.7071 10.7071C17.8946 10.5196 18 10.2652 18 10C18 9.73478 17.8946 9.48043 17.7071 9.29289C17.5196 9.10536 17.2652 9 17 9ZM7 9C6.73478 9 6.48043 9.10536 6.29289 9.29289C6.10536 9.48043 6 9.73478 6 10C6 10.2652 6.10536 10.5196 6.29289 10.7071C6.48043 10.8946 6.73478 11 7 11C7.26522 11 7.51957 10.8946 7.70711 10.7071C7.89464 10.5196 8 10.2652 8 10C8 9.73478 7.89464 9.48043 7.70711 9.29289C7.51957 9.10536 7.26522 9 7 9ZM24 2.5V20H16.968L12.983 23.295C12.7132 23.5335 12.3651 23.6645 12.005 23.663C11.649 23.663 11.289 23.537 11.004 23.284L7.106 20H0V2.5C0 1.122 1.121 0 2.5 0H21.5C22.879 0 24 1.122 24 2.5ZM23 2.5C23 1.673 22.327 1 21.5 1H2.5C1.673 1 1 1.673 1 2.5V19H7.471L11.659 22.527C11.7504 22.6115 11.87 22.6591 11.9945 22.6606C12.119 22.6621 12.2396 22.6173 12.333 22.535L16.609 18.999H23.001L23 2.5Z"
          fill="#28A69F"
        />
      </g>
      <defs>
        <clipPath id="clip0_307_656">
          <rect width={24} height={24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CommentIcon = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_307_641)">
        <path
          d="M18.57 0H5.577C4.38393 0.00132343 3.24011 0.475854 2.39648 1.31948C1.55285 2.16311 1.07832 3.30693 1.077 4.5V20.985C1.077 22.188 1.936 23.467 2.992 23.836C3.4936 24.014 4.03553 24.0456 4.55439 23.9269C5.07326 23.8083 5.54762 23.5443 5.922 23.166L12.073 17.047L18.153 23.095C18.96 23.899 20.135 24.193 21.15 23.838C21.7123 23.6491 22.2006 23.2876 22.5453 22.805C22.8901 22.3223 23.0737 21.7431 23.07 21.15V4.5C23.07 2.019 21.051 0 18.57 0ZM22.07 21.15C22.07 21.957 21.591 22.626 20.821 22.893C20.166 23.122 19.397 22.92 18.858 22.385L12.425 15.987C12.3311 15.8944 12.2044 15.8424 12.0725 15.8424C11.9406 15.8424 11.8139 15.8944 11.72 15.987L5.216 22.458C4.97528 22.7049 4.66855 22.8771 4.3325 22.9543C3.99644 23.0314 3.64528 23.0102 3.321 22.893C2.67 22.665 2.077 21.756 2.077 20.986V4.5C2.077 2.57 3.647 1 5.577 1H18.57C20.5 1 22.07 2.57 22.07 4.5V21.15Z"
          fill="#28A69F"
        />
      </g>
      <defs>
        <clipPath id="clip0_307_641">
          <rect width={24} height={24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const StarIcon = ({ className, ...props }) => {
  return (
    <svg
      width={27}
      height={27}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M11.7089 4.10489C12.4443 2.62478 14.5557 2.62478 15.2911 4.10489L16.8711 7.28481C17.1623 7.87094 17.7218 8.27749 18.3693 8.37333L21.8818 8.89331C23.5167 9.13534 24.1692 11.1434 22.9888 12.3002L20.4527 14.7855C19.9853 15.2436 19.7715 15.9014 19.8804 16.5467L20.4713 20.048C20.7464 21.6777 19.0382 22.9188 17.5733 22.1536L14.426 20.5097C13.8458 20.2066 13.1542 20.2066 12.574 20.5097L9.42672 22.1536C7.96179 22.9188 6.25362 21.6777 6.52866 20.048L7.11956 16.5467C7.22848 15.9014 7.01474 15.2436 6.54729 14.7855L4.01124 12.3002C2.83082 11.1434 3.48328 9.13534 5.1182 8.89331L8.63072 8.37333C9.27815 8.27749 9.83772 7.87094 10.1289 7.28481L11.7089 4.10489Z"
        fill="currentColor"
      />
    </svg>
  );
};
