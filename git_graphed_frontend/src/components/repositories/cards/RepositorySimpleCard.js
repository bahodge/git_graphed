import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { Link } from "react-router-dom";
import '../../../css/Repository.css'
import Button from "@material-ui/core/Button";

const RepositorySimpleCard = ({repository, userId}) => {
  const {
    repoName, id
  } = repository;
  return (
    <div className="repository-highlight-card">
      <Card>
        <CardContent>
          <div>
            <Typography>
              Repository Name:
            </Typography>
            <Typography color="textSecondary" component="p" gutterBottom>
                {repoName}
            </Typography>    
          </div>
        </CardContent>
        <CardActions>
        <Button color="primary" size="small"><Link to={`/users/${userId}/repositories/${id}`}>View</Link></Button>
        </CardActions>
      </Card>
    </div>
  );
};

RepositorySimpleCard.propTypes = {
  userId: PropTypes.string,
  repository: PropTypes.object,
};

export default RepositorySimpleCard;
