import fs from 'fs';
import path from 'path';
import cron from 'cron'

const uploadsFolder = './uploads';

const deleteFilesOlderThan= (days)=>{
    
    const now = new Date().getTime();
    const msPerDay = 24 * 60 * 60 * 1000; // milliseconds per day

    fs.readdir(uploadsFolder, (err, files) => {
        if (err) {
            console.error('Error reading uploads folder:', err);
            return;
        }

        files.forEach((file) => {
            const filePath = path.join(uploadsFolder, file);

            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error(`Error reading file stats for ${filePath}:`, err);
                    return;
                }

                const fileAgeInDays = (now - stats.ctime.getTime()) / msPerDay;

                if (fileAgeInDays > days) {
                    fs.unlink(filePath, (err) => {
                        if (err) {
                            console.error(`Error deleting file ${filePath}:`, err);
                        } else {
                            console.log(`Deleted file: ${filePath}`);
                        }
                    });
                }
            });
        });
    });
}

const CronJob = cron.CronJob;
const cleanupCronJob = new CronJob('0 0 * * *', function () {
  console.log('Running file cleanup script...');
  deleteFilesOlderThan(process.env.CLEANUP_DURATION);
});

export default cleanupCronJob;