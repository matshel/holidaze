import NextHead from "next/head";
import PropTypes from "prop-types";

export default function Head({ title, content }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""}Holidaze
      </title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Holidaze" />
      <meta name="keywords" content="hotell, leiligheter, herberge, utleie, overnatte, overnatting, billig overnatting, leie ut, airbnb alternativ hotell Bergen, utleie Bergen, bnb Bergen" />
      <meta name="description" content={content}></meta>
    </NextHead>
  );
}

Head.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
