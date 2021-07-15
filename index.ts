import app from './app';
import Log from './utils/logger';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    Log.info(`Application is running on port ${PORT}`);
});