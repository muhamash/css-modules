/* eslint-disable react/prop-types */
export default function Image({ imgSrc, altTag, width }) {
    return <img src={imgSrc} alt={altTag} width={width} />;
}