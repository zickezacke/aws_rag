import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputIcon from "@mui/icons-material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import PropTypes from "prop-types";

export const QAHeader = (props) => {
  const { setSelectedModel, setBaseUrl, modelList, selectedModel, baseUrl } =
    props;
  const [url, setUrl] = useState(baseUrl ?? "");
  const modelListDisabledText =
    "Input a valid base url to enable model selection";

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setBaseUrl(url);
    }
  };

  return (
    <div>
      <Typography
        variant="overline"
        sx={{ width: "100%", paddingBottom: "25px" }}
      >
        1. Input your base url here:
      </Typography>
      <OutlinedInput
        id="standard-basic"
        value={url}
        sx={{ width: "100%" }}
        name="Base Url"
        onChange={(event) => setUrl(event.target?.value)}
        onKeyDown={handleKeyDown}
        placeholder="https://example.execute-api.example.amazonaws.com/example/"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              color="primary"
              onClick={() => setBaseUrl(url)}
              onMouseDown={() => setBaseUrl(url)}
            >
              <InputIcon />
            </IconButton>
          </InputAdornment>
        }
      />
      <br></br>
      <br></br>
    </div>
  );
};

QAHeader.propTypes = {
  setSelectedModel: PropTypes.func.isRequired,
  setBaseUrl: PropTypes.func.isRequired,
  modelList: PropTypes.array,
  selectedModel: PropTypes.string,
  baseUrl: PropTypes.string,
};

QAHeader.defaultProps = {
  modelList: [],
  selectedModel: null,
  baseUrl: "",
};
