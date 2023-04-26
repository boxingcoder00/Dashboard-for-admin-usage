import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is CharlesCapital?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           CharlesCapital is more then a business or fund. Here we are a family 
            and community driven firm who look at a better future for our clients and the world.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What does CharlesCapital look into?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Here at CharlesCapital we invest diligently into up and coming technologies
            and trends we see fit with our vision.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Any tips for investing?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Depending on your age, goals, and budget we can tailer a model that is best fit for you,
            so to answer that question first learn and ask yourself "whats my risk tolerance?".
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Do you guys endorce BitCoin? 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Here at CharlesCapital we share the same vision in respect to a decentralized economy that 
            includes all with no middleman nor strings attached.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Why should I pick you?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             We tailer investment plans with our well picked diverse group of investors, we adjust it according
            to your prefernces as well as ours with a proven track record. From EAs to Real estate to crypto
            there is something beneficial for all.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
