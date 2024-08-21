import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

const useStyles = makeStyles((theme) => ({
    controlsWrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: "100%",
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
}));

const Controls = forwardRef(
    (
        {
            onPlayPause,
            playing,
            image,
        },
        ref
    ) => {
        const classes = useStyles();
        return (
            <div ref={ref} className={classes.controlsWrapper}
                style={{
                    backgroundImage: `url(${!playing && image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
            >
                <div
                    className={"d-flex justify-content-center align-items-center"}
                >
                    <div className="video-promo-content">
                        <button className="btn video-play-icon" onClick={onPlayPause}>
                            {playing ? (
                                <PauseIcon className="playSize" />
                            ) : (
                                <PlayArrowIcon className="playSize" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
);

Controls.propTypes = {
    onSeek: PropTypes.func,
    onSeekMouseDown: PropTypes.func,
    onSeekMouseUp: PropTypes.func,
    onDuration: PropTypes.func,
    onRewind: PropTypes.func,
    onPlayPause: PropTypes.func,
    onFastForward: PropTypes.func,
    onVolumeSeekDown: PropTypes.func,
    onChangeDispayFormat: PropTypes.func,
    onPlaybackRateChange: PropTypes.func,
    onToggleFullScreen: PropTypes.func,
    onMute: PropTypes.func,
    playing: PropTypes.bool,
    played: PropTypes.number,
    elapsedTime: PropTypes.string,
    totalDuration: PropTypes.string,
    muted: PropTypes.bool,
    playbackRate: PropTypes.number,
};
export default Controls;
