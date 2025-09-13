import React, { useState } from 'react';
import { Box, Button, Typography, TextField, Grid, IconButton } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const MediaComponent = () => {
    const [featuredImages, setFeaturedImages] = useState([]);
    const [galleryImages, setGalleryImages] = useState([]);
    const [attachment, setAttachment] = useState(null);
    const [videoLink, setVideoLink] = useState('');
    const [virtualTour, setVirtualTour] = useState('');

    const handleFeaturedChange = (e) => {
        if(featuredImages.length === 4) {
            return
            // featuredImages[0] = Array.from(e.target.files)[0]
        }
        console.log(featuredImages)
        const files = [Array.from(e.target.files)[0],...featuredImages]; // Maks 4 ta rasm
        setFeaturedImages(files);
    };

    const handleGalleryChange = (e) => {
        const files = Array.from(e.target.files);
        setGalleryImages(files);
    };

    const handleAttachmentChange = (e) => {
        const file = e.target.files[0];
        setAttachment(file);
    };

    return (
        <div className='container p-6  mx-auto flex flex-col items-start shadow-2xl'>
            <Typography variant="h6" mb={2}>Media</Typography>

            {/* Featured Image */}
            <Typography variant="subtitle2" gutterBottom>Featured image</Typography>
            <Grid container spacing={2} mb={1}>
                {[0, 1, 2, 3].map((idx) => (
                    <Grid item key={idx}>
                        <Box
                            sx={{
                                width: 80,
                                height: 80,
                                bgcolor: '#ccc',
                                borderRadius: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden'
                            }}
                        >
                            {featuredImages[idx] ? (
                                <img
                                    src={URL.createObjectURL(featuredImages[idx])}
                                    alt={`featured-${idx}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ) : null}
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Button variant="outlined" component="label" size="small" sx={{ mb: 3 }}>
                Upload
                <input
                    type="file"
                    hidden
                    multiple
                    accept="image/*"
                    onChange={handleFeaturedChange}
                />
            </Button>

            {/* Gallery */}
            <Typography variant="subtitle2" gutterBottom>Gallery</Typography>
            <Button variant="outlined" component="label" size="small" sx={{ mb: 3 }}>
                Upload
                <input
                    type="file"
                    hidden
                    multiple
                    accept="image/*"
                    onChange={handleGalleryChange}
                />
            </Button>

            {/* Attachment */}
            <Typography variant="subtitle2" gutterBottom>Attachment</Typography>
            {attachment ? (
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <InsertDriveFileIcon sx={{ mr: 1 }} />
                    <Typography variant="body2">{attachment.name}</Typography>
                </Box>
            ) : null}
            <Button variant="outlined" component="label" size="small" sx={{ mb: 3 }}>
                Upload
                <input
                    type="file"
                    hidden
                    accept=".pdf"
                    onChange={handleAttachmentChange}
                />
            </Button>

            {/* Video link */}
            <Typography variant="subtitle2" gutterBottom>Video link</Typography>
            <TextField
                variant="standard"
                fullWidth
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
                sx={{ mb: 3 }}
            />

            {/* Virtual tour */}
            {/* <Typography variant="subtitle2" gutterBottom>Virtual tour</Typography>
            <TextField
                variant="standard"
                fullWidth
                value={virtualTour}
                onChange={(e) => setVirtualTour(e.target.value)}
            /> */}
        </div>
    );
};

export default MediaComponent;
