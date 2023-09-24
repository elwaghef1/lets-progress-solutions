import React from 'react';
import { Card, CardMedia } from '@mui/material';

interface ShortcutProps {
    imageUrl: string;
    url: string;
}

const Shortcut: React.FC<ShortcutProps> = ({ imageUrl, url }) => {
    return (
        <Card style={{ maxWidth: 200, margin: 10, borderRadius: "50%" }}>
            <CardMedia
            component="img"
            height="50"
            image={imageUrl}
        />
        </Card>
    );
}

export default Shortcut;
