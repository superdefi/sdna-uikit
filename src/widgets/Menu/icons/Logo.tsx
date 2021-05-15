import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 225 225" {...props}>
      <path
        d="M1035 2244c-333-36-613-191-807-448-296-393-296-949 0-1342 333-441 924-575 1416-321 370 191 599 571 599 992 0 480-294 896-750 1058-125 45-339 73-458 61zm426-290c85-26 148-62 205-119 110-110 90-226-45-251-143-27-384 107-422 236-12 38-11 46 7 79 36 68 137 90 255 55zm-434-193c67-31 86-83 74-211-14-166-1-178 171-154 163 23 288 16 360-19 69-34 173-141 211-217 25-50 27-63 27-181 0-132-8-159-46-145-13 5-15 24-12 133 4 153-7 183-100 279-104 106-196 130-391 100-183-28-231-20-264 44-16 30-18 50-12 146 3 65 2 122-4 137-25 66-234 57-271-12-27-52 0-138 77-241 88-119 102-167 60-216-16-18-30-25-40-21-19 7-23 42-7 52 25 15 9 65-45 136-108 143-140 250-93 318 13 19 38 44 57 55 66 39 182 46 248 17zm483-591c17-47 15-47 90-39 30 3 35 1 38-18 3-17-4-26-23-33s-25-15-21-26c3-9 6-22 6-30 0-7 14-20 30-29 18-9 30-23 30-36 0-25-22-34-48-20-16 9-21 7-25-9-3-13 1-21 14-25 25-8 40-37 29-55-7-12-15-13-40-3-26 10-32 9-37-5-4-8-2-17 4-19 5-2 19-10 29-18 15-11 17-17 8-32-7-10-19-17-28-15-9 1-23 3-32 5-30 4-26-21 5-38 33-16 42-49 16-59-8-3-28 2-45 12-26 14-32 15-39 3-7-10-2-20 15-33 42-34 21-73-26-48-16 9-25 8-36-1-13-10-13-14 1-29 33-36 10-72-30-46-20 13-25 13-35 1-9-11-7-16 9-25 25-13 27-33 6-50-12-10-18-10-32 1-9 8-43 15-82 16-36 1-79 3-95 5-38 4-43-15-11-44 14-13 28-40 31-59 5-31 2-39-27-63-26-22-39-26-63-22-41 9-53 22-39 44 7 11 21 16 42 14 25-3 31 0 31 17 0 11-11 31-25 45-30 30-33 74-6 107 26 33 17 77-20 98-32 18-38 48-13 58 9 3 25 1 34-5 14-9 20-8 24 5 7 18 8 16-21 32-25 12-28 27-14 50 8 12 15 13 34 4 36-17 45 11 11 33-16 11-24 24-22 38 3 21 11 23 62 14 32-5 29 20-3 37-31 15-41 47-20 60 5 4 24 1 41-6 25-10 31-10 39 2 6 10 0 20-18 35-45 35-12 72 37 42 15-10 22-10 32 0s8 15-10 28c-24 16-30 50-9 57 6 2 25-2 41-10 38-20 59-2 27 24-15 12-20 24-16 36 9 21 28 22 59 2 31-21 86-3 79 25-8 29 4 52 24 48 10-2 24-22 33-48zm-929-55c43-23 69-71 69-127 0-121-149-178-234-90-109 114 24 289 165 217zm339-170c49-52 13-135-59-135-47 0-81 32-81 79 0 75 89 111 140 56z"
        transform="matrix(.1 0 0 -.1 0 225)"
      />
      <path
        d="M1295 1920c-109-34-48-173 110-249 111-54 229-61 273-17 23 22 17 73-14 117-68 99-270 180-369 149zm115-45c20-25 8-50-25-50-21 0-31 5-33 18-4 21 14 47 33 47 7 0 18-7 25-15zm112-92c10-9 18-29 18-44 0-60-65-78-103-28-16 23-17 30-7 50 23 43 59 52 92 22zM1400 1041c-7-15-6-23 6-35 19-19 26-20 42-4 17 17 15 45-4 52-25 10-33 7-44-13zM1404 836c-10-26 4-46 31-46 23 0 26 4 23 28-3 31-44 45-54 18zM1256 794c-20-19-5-54 24-54 23 0 36 36 20 55s-25 19-44-1zM1257 594c-23-23 7-69 37-58 25 10 17 58-9 62-12 2-24 0-28-4zM832 918c-27-27-7-78 29-78 21 0 49 26 49 45 0 35-53 58-78 33z"
        transform="matrix(.1 0 0 -.1 0 225)"
      />
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
